package com.rnalarm;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;

/**
 * for react-native-alarm-manager
 **/
import android.content.pm.PackageManager;
import androidx.annotation.Nullable;
import com.baekgol.reactnativealarmmanager.AlarmModule;
import com.baekgol.reactnativealarmmanager.util.BootReceiver;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RnAlarm";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName()){
      @Nullable
      @Override
      protected Bundle getLaunchOptions(){
        Intent intent = getIntent();
        Bundle bundle = intent.getExtras();
        if(intent.getBooleanExtra("notiRemovable",true))
          AlarmModule.stop(this.getContext());
          return bundle;
      }
    };
  }

  /**for react navigation */
  @Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    ComponentName receiver = new ComponentName(this,BootReceiver.class);
    PackageManager packageManager = this.getPackageManager();
    packageManager.setComponentEnabledSetting(receiver,
            PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
            PackageManager.DONT_KILL_APP);

}

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
}
