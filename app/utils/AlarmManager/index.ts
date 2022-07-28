import Alarm, { AlarmScheduleType, AlarmType } from "react-native-alarm-manager"


export const scheduleAlarm = (alarmData: AlarmScheduleType) => {
    console.log(alarmData, "alarmData")
    Alarm.schedule(
        alarmData,
        success => console.log(success),
        fail => console.log(fail)
    )
}

export const getAllAlarm = (setData: any) => {
    Alarm.searchAll(
        success => {
            setData(success)
        },
        fail => console.log(fail)
    )
}

export const modifyAlarm = (alarmData: AlarmType) => {
    Alarm.modify(
        alarmData,
        success => console.log(success),
        fail => console.log(fail)
    )
}


