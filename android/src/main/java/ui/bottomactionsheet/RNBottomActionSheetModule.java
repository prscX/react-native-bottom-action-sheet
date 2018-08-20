
package ui.bottomactionsheet;

import android.annotation.TargetApi;
import android.content.ContentResolver;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.StrictMode;
import android.support.annotation.RequiresApi;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.view.MenuItem;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import com.facebook.react.views.text.ReactFontManager;
import com.github.javiersantos.bottomdialogs.BottomDialog;
import com.github.rubensousa.bottomsheetbuilder.BottomSheetBuilder;
import com.github.rubensousa.bottomsheetbuilder.BottomSheetMenuDialog;
import com.github.rubensousa.bottomsheetbuilder.adapter.BottomSheetItemClickListener;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Map;

import java.net.URL;

public class RNBottomActionSheetModule extends ReactContextBaseJavaModule {

  public RNBottomActionSheetModule(ReactApplicationContext reactContext) {
    super(reactContext);
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

    new BottomDialog.Builder(getCurrentActivity())
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

  @ReactMethod
  public void SheetView(final ReadableMap props, final Callback callback) {
    String title = props.getString("title");
    ReadableArray items = props.getArray("items");

    String theme = props.getString("theme");

    String titleTextColor = props.getString("titleTextColor");
    String itemTextColor = props.getString("itemTextColor");
    String itemTintColor = props.getString("itemTintColor");
    String backgroundColor = props.getString("backgroundColor");

    BottomSheetBuilder bottomSheetBuilder = new BottomSheetBuilder(getCurrentActivity());
    bottomSheetBuilder = bottomSheetBuilder.setMode(BottomSheetBuilder.MODE_LIST);
    bottomSheetBuilder = bottomSheetBuilder.addTitleItem(title);

    if (titleTextColor != null && titleTextColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setTitleTextColor(Color.parseColor(titleTextColor));
    }
    if (itemTextColor != null && itemTextColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setItemTextColor(Color.parseColor(itemTextColor));
    }

    if (itemTintColor != null && itemTintColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setIconTintColor(Color.parseColor(itemTintColor));
    }
    if (backgroundColor != null && backgroundColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setBackgroundColor(Color.parseColor(backgroundColor));
    }


    for (int index = 0; index < items.size(); index++) {
      ReadableMap item = items.getMap(index);

      String dividerKey = "divider";
      boolean divider = item.hasKey(dividerKey) && item.getBoolean(dividerKey);
      if (divider) {
        String titleKey = "title";
        String dividerTitle = item.hasKey(titleKey) ? item.getString(titleKey) : "";
        if (dividerTitle != null && dividerTitle.length() > 0) {
          bottomSheetBuilder = bottomSheetBuilder.addTitleItem(dividerTitle);
        }

        bottomSheetBuilder = bottomSheetBuilder.addDividerItem();
      } else {
        String iconKey = "icon";
        ReadableMap icon = item.hasKey(iconKey) ? item.getMap(iconKey) : null;
        if (icon == null || icon.toHashMap().size() == 0) {
          bottomSheetBuilder = bottomSheetBuilder.addItem(index, item.getString("title"), null);
          continue;
        }

        Drawable drawable = this.generateVectorIcon(icon);
        bottomSheetBuilder = bottomSheetBuilder.addItem(index, item.getString("title"), drawable);
      }
    }

    bottomSheetBuilder = bottomSheetBuilder.setItemClickListener(new BottomSheetItemClickListener() {
      @Override
      public void onBottomSheetItemClick(MenuItem item) {
        callback.invoke(item.getItemId());
      }
    });

    BottomSheetMenuDialog dialog = bottomSheetBuilder.createDialog();
    dialog.show();
  }


  @ReactMethod
  public void GridView(final ReadableMap props, final Callback callback) {
    String title = props.getString("title");
    ReadableArray items = props.getArray("items");

    String theme = props.getString("theme");

    String itemTextColor = props.getString("itemTextColor");
    String itemTintColor = props.getString("itemTintColor");
    String backgroundColor = props.getString("backgroundColor");

    BottomSheetBuilder bottomSheetBuilder = new BottomSheetBuilder(getCurrentActivity(), R.style.Theme_Design_Light_BottomSheetDialog);
    bottomSheetBuilder = bottomSheetBuilder.setMode(BottomSheetBuilder.MODE_GRID);

    if (itemTextColor != null && itemTextColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setItemTextColor(Color.parseColor(itemTextColor));
    }
    if (itemTintColor != null && itemTintColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setIconTintColor(Color.parseColor(itemTintColor));
    }
    if (backgroundColor != null && backgroundColor.length() > 0) {
      bottomSheetBuilder = bottomSheetBuilder.setBackgroundColor(Color.parseColor(backgroundColor));
    }


    for (int index = 0; index < items.size(); index++) {
      ReadableMap item = items.getMap(index);

      String iconKey = "icon";
      ReadableMap icon = item.hasKey(iconKey) ? item.getMap(iconKey) : null;
      if (icon == null || icon.toHashMap().size() == 0) {
        bottomSheetBuilder = bottomSheetBuilder.addItem(index, item.getString("title"), null);
        continue;
      }

      Drawable drawable = this.generateVectorIcon(icon);
      bottomSheetBuilder = bottomSheetBuilder.addItem(index, item.getString("title"), drawable);
    }

    bottomSheetBuilder = bottomSheetBuilder.setItemClickListener(new BottomSheetItemClickListener() {
      @Override
      public void onBottomSheetItemClick(MenuItem item) {
        callback.invoke(item.getItemId());
      }
    });

    BottomSheetMenuDialog dialog = bottomSheetBuilder.createDialog();
    dialog.show();
  }

  @TargetApi(21)
  private Drawable generateVectorIcon(ReadableMap icon) {
    StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
    StrictMode.setThreadPolicy(policy);

    String family = icon.getString("family");
    String name = icon.getString("name");
    String glyph = icon.getString("glyph");
    String color = icon.getString("color");
    int size = icon.getInt("size");

    if (name != null && name.length() > 0 && name.contains(".")) {
      Resources resources = getReactApplicationContext().getResources();
      name = name.substring(0, name.lastIndexOf("."));

      final int resourceId = resources.getIdentifier(name, "drawable", getReactApplicationContext().getPackageName());
      return getReactApplicationContext().getDrawable(resourceId);
    }

    float scale = getReactApplicationContext().getResources().getDisplayMetrics().density;
    String scaleSuffix = "@" + (scale == (int) scale ? Integer.toString((int) scale) : Float.toString(scale)) + "x";
    int fontSize = Math.round(size * scale);

    Typeface typeface = ReactFontManager.getInstance().getTypeface(family, 0, getReactApplicationContext().getAssets());
    Paint paint = new Paint();
    paint.setTypeface(typeface);
    paint.setColor(Color.parseColor(color));
    paint.setTextSize(fontSize);
    paint.setAntiAlias(true);
    Rect textBounds = new Rect();
    paint.getTextBounds(glyph, 0, glyph.length(), textBounds);

    Bitmap bitmap = Bitmap.createBitmap(textBounds.width(), textBounds.height(), Bitmap.Config.ARGB_8888);
    Canvas canvas = new Canvas(bitmap);
    canvas.drawText(glyph, -textBounds.left, -textBounds.top, paint);

    return new BitmapDrawable(getReactApplicationContext().getResources(), bitmap);
  }
}
