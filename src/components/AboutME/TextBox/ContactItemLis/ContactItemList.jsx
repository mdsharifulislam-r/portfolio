import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import { GoMail } from "react-icons/go";

export default function ContactItemList() {
  return (
    <div className="px-3 py-2 grid lg:grid-cols-2 md:grid-cols-2 gap-y-6">
      <ContactItem
        icon={<GoMail />}
        type={"Email"}
        info={"masom3456@gmail.com"}
      />
      <ContactItem
        icon={<GoMail />}
        type={"Email"}
        info={"masom3456@gmail.com"}
      />
      <ContactItem
        icon={<GoMail />}
        type={"Email"}
        info={"masom3456@gmail.com"}
      />
      <ContactItem
        icon={<GoMail />}
        type={"Email"}
        info={"masom3456@gmail.com"}
      />

    </div>
  );
}
