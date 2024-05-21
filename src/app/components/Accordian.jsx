import React from 'react'
import { Accordion as CustomAccordian, AccordionItem } from '@nextui-org/react'

export default function Accordion() {
  const items = [{q:'How can I join a society through the GCUF Society Management System?',ans:' To join a society, log in to the system, navigate to the "Societies" section, select the society you are interested in, and click on the "Join Society" button. Fill out the required application form and submit it. Your application will be reviewed by the society administrator.'},{q:'How can I join a society through the GCUF Society Management System?',ans:'To join a society, log in to the system, navigate to the "Societies" section, select the society you are interested in, and click on the "Join Society" button. Fill out the required application form and submit it. Your application will be reviewed by the society administrator.',q:'What is the process for getting approval to join a society?',ans:'Once you submit your application to join a society, the society administrator will review your application. You will receive a notification through the system once your application has been approved or rejected.'},{q:'How can I view upcoming events organized by societies?',ans:'After logging in, go to the "Events" section. Here you will find a list of upcoming events along with details such as date, time, location, and the organizing society.'},{q:'How do I register for an event?',ans:'To register for an event, navigate to the event\'s page in the "Events" section and click on the "Register" button. You may need to fill out some additional information depending on the event\'s requirements.'
}]
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <CustomAccordian isCompact >
      {items?.map((item, index) => (
        <AccordionItem className='' key={index} aria-label='Accordion 1' title={<span className="text-[14px] font-semibold">{item.q}</span>}>
          {item.ans}
        </AccordionItem>
      ))}
    </CustomAccordian>
  )
}
