import { generateSlugId } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useChat } from "ai/sdk-react";                        // ✅ Fixed: added source
import { DefaultChatTransport } from "ai";
import { toast } from "sonner";                     

type PropsType = {
  isProjectPage?: boolean;
  slugId?: string;
};

const ChatInterface = ({
  isProjectPage = false,
  slugId: propSlugId,
}: PropsType) => {
  const pathName = usePathname();
  const router = useRouter();

  const [slugId, setSlugId] = useState<string>(
    () => propSlugId || generateSlugId()   // ✅ Fixed: call generateSlugId()
  );
  const [input, setInput] = useState("");
  const [projectTitle, setProjectTitle] = useState<string | null>(null); // ✅ Fixed: allow null
  const [hasStarted, setHasStarted] = useState(isProjectPage);

  const { messages, sendMessage, setMessages, status, error, stop } = useChat({
    messages: [],
    transport: new DefaultChatTransport({
      api: "/api/project",
      prepareSendMessagesRequest: ({ messages, body }) => {
        return {
          body: {
            ...body,
            messages,
          },
        };
      },
    }),
    onError: (error:string) => {
      console.log(error);
      toast.error("Failed to generate response");
    },
  });

  useEffect(() => {                                   // ✅ Fixed: everything inside useEffect
    const checkReset = () => {
      if (window.location.pathname === "/" && (hasStarted || isProjectPage)) {
        setSlugId(generateSlugId());
        setMessages([]);                              // ✅ Fixed: reset messages, not sendMessage([])
        setHasStarted(false);
        setProjectTitle(null);
      }
    };

    window.addEventListener("popstate", checkReset); // ✅ Fixed: inside effect

    if (pathName === "/" && hasStarted) {
      checkReset();
    }

    return () => window.removeEventListener("popstate", checkReset); // ✅ Fixed: proper cleanup
  }, [pathName, hasStarted, isProjectPage]);          // ✅ Fixed: dependency array

  return <div>ChatInterface</div>;
};

export default ChatInterface;