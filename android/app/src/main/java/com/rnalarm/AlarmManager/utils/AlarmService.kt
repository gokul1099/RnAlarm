package com.rnalarm.AlarmManager.utils
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.IBinder;
import android.os.VibrationEffect;
import android.os.Vibrator;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

class AlarmService : Service() {
    override fun onBind(p0: Intent?): IBinder? {
        TODO("Not yet implemented")
    }

}