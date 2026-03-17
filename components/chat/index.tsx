import { generateSlugId } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
  const [slugId, setSlugId] = useState(() => propSlugId || generateSlugId);




  
  return <div>ChatInterface</div>;
};

export default ChatInterface;
