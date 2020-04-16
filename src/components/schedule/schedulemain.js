import React, { useState } from "react"
import ScheduleHeader from './scheduleheader'
import CurrentDisplay from './currenttaskdisplay'


function ScheduleMain (){
  return(
    <div>
    <ScheduleHeader />
      <div id = "schedulegrid">
        <CurrentDisplay />
      </div>
    </div>
  )
}

export default ScheduleMain
