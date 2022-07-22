package com.rnalarm.AlarmManager
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log


class AlarmManagerModule(reactContext: ReactApplicationContext):ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "AlarmManager"
    }
    @ReactMethod
    fun alarmManager(name:String){
        Log.d("AlarmManager","Alarm Manager Working")
    }
}