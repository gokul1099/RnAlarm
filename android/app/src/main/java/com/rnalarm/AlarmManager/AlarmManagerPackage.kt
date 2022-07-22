package com.rnalarm.AlarmManager

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class AlarmManagerPackage:ReactPackage {
    override fun createViewManagers(reactContext: ReactApplicationContext):List<ViewManager<*,*>>{
        return emptyList<ViewManager<*,*>>()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        val modules = ArrayList<NativeModule>();
        modules.add(AlarmManagerModule(reactContext));
        return modules
    }

}
