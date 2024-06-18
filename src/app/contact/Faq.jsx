import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { faqData } from "../../../utils/data";

export default function Faq() {

  return (
    <Accordion>
        {faqData.map((key,id) => (
            <AccordionItem key={id} aria-label="Accordion 1" title={key.question}>
                {key.answer}
            </AccordionItem>
        ))
        }
    </Accordion>
  );
}

