
package ui.bottomactionsheet;

import android.graphics.Color;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import com.github.javiersantos.bottomdialogs.BottomDialog;

import java.util.ArrayList;

public class RNBottomActionSheetModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNBottomActionSheetModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNBottomActionSheet";
  }

  @ReactMethod
  public void AlertView(final ReadableMap props, final Callback callback) {
    String title = props.getString("title");
    String message = props.getString("message");

    String theme = props.getString("theme");

    String positiveText = props.getString("positiveText");
    String positiveBackgroundColor = props.getString("positiveBackgroundColor");
    String positiveTextColor = props.getString("positiveTextColor");

    String negativeText = props.getString("negativeText");
    String negativeBackgroundColor = props.getString("negativeBackgroundColor");
    String negativeTextColor = props.getString("negativeTextColor");

    new BottomDialog.Builder(this.reactContext.getCurrentActivity())
            .setTitle(title)
            .setContent(message)
            .setPositiveText(positiveText)
            .setPositiveBackgroundColor(Color.parseColor(positiveBackgroundColor))
            .setPositiveTextColor(Color.parseColor(positiveTextColor))
            .onPositive(new BottomDialog.ButtonCallback() {
              @Override
              public void onClick(BottomDialog dialog) {
                callback.invoke(1);
              }
            })
            .setNegativeText(negativeText)
            .setNegativeTextColor(Color.parseColor(negativeBackgroundColor))
            .onNegative(new BottomDialog.ButtonCallback() {
              @Override
              public void onClick(BottomDialog dialog) {
                callback.invoke(0);
              }
            }).show();
  }
}