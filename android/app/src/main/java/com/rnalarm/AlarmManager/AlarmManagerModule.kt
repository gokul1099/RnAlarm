package com.rnalarm.AlarmManager
import android.app.AlarmManager
import android.app.NotificationManager
import android.content.Context
import android.util.Log
import com.facebook.react.bridge.*
import java.sql.Time
import java.util.*


class AlarmManagerModule(reactContext: ReactApplicationContext):ReactContextBaseJavaModule(reactContext){

    private val reactContext: ReactApplicationContext? = null
    private val notificationManger : NotificationManager?=null;
    private var alarmManager = reactContext.getSystemService(Context.ALARM_SERVICE) as AlarmManager
    private val channelId = "ReactNativeAlarm";

    override fun getName(): String {
        return "AlarmManager"
    }
    @ReactMethod
    fun setAlarm(input:ReadableMap,success:Callback,fail:Callback){
        val time:String = Time.valueOf(input.getString("alarm_time")).toString();
        val timeInfo = time.split(":");
        val hour = Integer.parseInt(timeInfo[0]);
        val minutes= Integer.parseInt(timeInfo[1]);
        val calender :Calendar = Calendar.getInstance();
        calender.setTimeInMillis(System.currentTimeMillis());
        val currHour = calender.get(Calendar.HOUR_OF_DAY);
        val currMinute = calender.get(Calendar.MINUTE);
        val currSecond = calender.get(Calendar.SECOND)
        calender.set(Calendar.HOUR_OF_DAY,hour);
        calender.set(Calendar.MINUTE,minutes);
        if(hour < currHour || hour == currHour && minutes < currMinute){

        }





    }

}