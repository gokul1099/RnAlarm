package com.rnalarm.AlarmManager.utils

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.icu.util.Calendar;

class AlarmReceiver: BroadcastReceiver() {
    private var alarmManager : AlarmManager?=null;
    override fun onReceive(context:Context, intent: Intent){
        alarmManager =context.getSystemService(Context.ALARM_SERVICE) as AlarmManager;
        TODO("have to implement alrm functionality")

    }
}