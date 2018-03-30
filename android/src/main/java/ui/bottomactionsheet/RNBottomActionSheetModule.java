
package ui.bottomactionsheet;

import android.content.ContentResolver;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.StrictMode;
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

  @ReactMethod
  public void SheetView(final ReadableMap props, final Callback callback) {
    String title = props.getString("title");
    ReadableArray items = props.getArray("items");

    String theme = props.getString("theme");

    String titleTextColor = props.getString("titleTextColor");
    String itemTextColor = props.getString("itemTextColor");
    String itemTintColor = props.getString("itemTintColor");
    String backgroundColor = props.getString("backgroundColor");
    boolean delayDismissOnItemClick = props.getBoolean("delayDismissOnItemClick");


    BottomSheetBuilder bottomSheetBuilder = new BottomSheetBuilder(reactContext.getCurrentActivity(), R.style.Theme_Design_Light_BottomSheetDialog);
    bottomSheetBuilder.setMode(BottomSheetBuilder.MODE_LIST);
    bottomSheetBuilder.addTitleItem(title);

    for (int index = 0; index < items.size(); index++) {
      ReadableMap item = items.getMap(index);

      boolean divider = item.getBoolean("divider");
      if (divider) {
        String dividerTitle = item.getString("title");
        if (dividerTitle != null && dividerTitle.length() > 0) {
          bottomSheetBuilder.addTitleItem(dividerTitle);
        }

        bottomSheetBuilder.addDividerItem();
      } else {
        ReadableMap icon = item.getMap("icon");
        if (icon == null) {
          continue;
        }

        Drawable drawable = this.generateVectorIcon(icon);
        bottomSheetBuilder.addItem(index, item.getString("title"), drawable);
      }
    }

    if (titleTextColor != null && titleTextColor.length() > 0) {
      bottomSheetBuilder.setTitleTextColor(Color.parseColor(titleTextColor));
    }
    if (itemTextColor != null && itemTextColor.length() > 0) {
      bottomSheetBuilder.setItemTextColor(Color.parseColor(itemTextColor));
    }
    if (itemTintColor != null && itemTintColor.length() > 0) {
      bottomSheetBuilder.setIconTintColor(Color.parseColor(itemTintColor));
    }
    if (backgroundColor != null && backgroundColor.length() > 0) {
      bottomSheetBuilder.setBackgroundColor(Color.parseColor(backgroundColor));
    }
    if (delayDismissOnItemClick) {
      bottomSheetBuilder.delayDismissOnItemClick(delayDismissOnItemClick);
    }


    bottomSheetBuilder.setItemClickListener(new BottomSheetItemClickListener() {
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
    boolean delayDismissOnItemClick = props.getBoolean("delayDismissOnItemClick");

    BottomSheetBuilder bottomSheetBuilder = new BottomSheetBuilder(reactContext.getCurrentActivity(), R.style.Theme_Design_Light_BottomSheetDialog);
    bottomSheetBuilder.setMode(BottomSheetBuilder.MODE_GRID);

    for (int index = 0; index < items.size(); index++) {
      ReadableMap item = items.getMap(index);
      ReadableMap icon = item.getMap("icon");

      if (icon == null) {
        continue;
      }

      Drawable drawable = this.generateVectorIcon(icon);
      bottomSheetBuilder.addItem(index, item.getString("title"), drawable);
    }


    if (itemTextColor != null && itemTextColor.length() > 0) {
      bottomSheetBuilder.setItemTextColor(Color.parseColor(itemTextColor));
    }
    if (itemTintColor != null && itemTintColor.length() > 0) {
      bottomSheetBuilder.setIconTintColor(Color.parseColor(itemTintColor));
    }
    if (backgroundColor != null && backgroundColor.length() > 0) {
      bottomSheetBuilder.setBackgroundColor(Color.parseColor(backgroundColor));
    }
    if (delayDismissOnItemClick) {
      bottomSheetBuilder.delayDismissOnItemClick(delayDismissOnItemClick);
    }

    bottomSheetBuilder.setItemClickListener(new BottomSheetItemClickListener() {
      @Override
      public void onBottomSheetItemClick(MenuItem item) {
        callback.invoke(item.getItemId());
      }
    });

    BottomSheetMenuDialog dialog = bottomSheetBuilder.createDialog();
    dialog.show();
  }


  private Drawable generateVectorIcon(ReadableMap icon) {
    StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
    StrictMode.setThreadPolicy(policy);

    String family = icon.getString("family");
    String name = icon.getString("name");
    String glyph = icon.getString("glyph");
    String color = icon.getString("color");
    int size = icon.getInt("size");

    float scale = reactContext.getResources().getDisplayMetrics().density;
    String scaleSuffix = "@" + (scale == (int) scale ? Integer.toString((int) scale) : Float.toString(scale)) + "x";
    int fontSize = Math.round(size * scale);

    Typeface typeface = ReactFontManager.getInstance().getTypeface(family, 0, reactContext.getAssets());
    Paint paint = new Paint();
    paint.setTypeface(typeface);
    paint.setColor(Color.parseColor(color));
    paint.setTextSize(size);
    paint.setAntiAlias(true);
    Rect textBounds = new Rect();
    paint.getTextBounds(glyph, 0, glyph.length(), textBounds);

    Bitmap bitmap = Bitmap.createBitmap(textBounds.width(), textBounds.height(), Bitmap.Config.ARGB_8888);
    Canvas canvas = new Canvas(bitmap);
    canvas.drawText(glyph, -textBounds.left, -textBounds.top, paint);

    return new BitmapDrawable(reactContext.getResources(), bitmap);
  }}