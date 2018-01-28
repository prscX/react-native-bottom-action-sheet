package ui.bottomactionsheet;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.Animatable;
import android.net.Uri;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.drawable.ScalingUtils;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.view.DraweeHolder;
import com.facebook.imagepipeline.image.QualityInfo;
import com.facebook.imagepipeline.image.ImageInfo;
import com.facebook.drawee.controller.BaseControllerListener;
import com.facebook.react.views.toolbar.DrawableWithIntrinsicSize;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.view.MultiDraweeHolder;

import java.util.Map;
import javax.annotation.Nullable;

/**
 * Created by user on 28/01/18.
 */

public class Image {
    private Context context;
    private final MultiDraweeHolder<GenericDraweeHierarchy> mActionsHolder =  new MultiDraweeHolder<>();

    public void getDrawable (Drawable drawable, ReadableMap source, Context cont) {
        context = cont;

        DraweeHolder<GenericDraweeHierarchy> holder =
                DraweeHolder.create(createDraweeHierarchy(), context);

        ActionIconControllerListener controllerListener =  new ActionIconControllerListener(drawable, holder);

        controllerListener.setIconImageInfo(getIconImageInfo(source));
        setIconSource(source, controllerListener, holder);

        mActionsHolder.add(holder);
    }


    private GenericDraweeHierarchy createDraweeHierarchy() {
        return new GenericDraweeHierarchyBuilder(context.getResources())
                .setActualImageScaleType(ScalingUtils.ScaleType.FIT_CENTER)
                .setFadeDuration(0)
                .build();
    }


    private void setIconSource(ReadableMap source, IconControllerListener controllerListener,
                               DraweeHolder holder) {
        String uri = source != null ? source.getString("uri") : null;

        if (uri == null) {
            controllerListener.setIconImageInfo(null);
            controllerListener.setDrawable(null);
        } else if (uri.startsWith("http://") || uri.startsWith("https://") ||
                uri.startsWith("file://")) {
            controllerListener.setIconImageInfo(getIconImageInfo(source));
            DraweeController controller = Fresco.newDraweeControllerBuilder()
                    .setUri(Uri.parse(uri))
                    .setControllerListener(controllerListener)
                    .setOldController(holder.getController())
                    .build();
            holder.setController(controller);
            holder.getTopLevelDrawable().setVisible(true, true);
        } else {
            controllerListener.setDrawable(getDrawableByName(uri));
        }
    }


    private int getDrawableResourceByName(String name) {
        return context.getResources().getIdentifier(
                name,
                "drawable",
                context.getPackageName());
    }

    private Drawable getDrawableByName(String name) {
        int drawableResId = getDrawableResourceByName(name);
        if (drawableResId != 0) {
            return context.getResources().getDrawable(getDrawableResourceByName(name));
        } else {
            return null;
        }
    }

    private IconImageInfo getIconImageInfo(ReadableMap source) {
        if (source.hasKey("width") && source.hasKey("height")) {
            final int width = Math.round(PixelUtil.toPixelFromDIP(source.getInt("width")));
            final int height = Math.round(PixelUtil.toPixelFromDIP(source.getInt("height")));
            return new IconImageInfo(width, height);
        } else {
            return null;
        }
    }

    private static class IconImageInfo implements ImageInfo {
        private int mWidth;
        private int mHeight;

        public IconImageInfo(int width, int height) {
            mWidth = width;
            mHeight = height;
        }

        @Override
        public int getWidth() {
            return mWidth;
        }

        @Override
        public int getHeight() {
            return mHeight;
        }

        @Override
        public QualityInfo getQualityInfo() {
            return null;
        }
    }


    private abstract class IconControllerListener extends BaseControllerListener<ImageInfo> {

        private final DraweeHolder mHolder;
        private IconImageInfo mIconImageInfo;

        public IconControllerListener(DraweeHolder holder) {
            mHolder = holder;
        }

        public void setIconImageInfo(IconImageInfo iconImageInfo) {
            mIconImageInfo = iconImageInfo;
        }

        @Override
        public void onFinalImageSet(String id, @Nullable ImageInfo imageInfo, @Nullable Animatable animatable) {
            super.onFinalImageSet(id, imageInfo, animatable);

            final ImageInfo info = mIconImageInfo != null ? mIconImageInfo : imageInfo;
            setDrawable(new DrawableWithIntrinsicSize(mHolder.getTopLevelDrawable(), info));
        }

        protected abstract void setDrawable(Drawable d);
    }

    private class ActionIconControllerListener extends IconControllerListener {
        private Drawable drawable = null;

        ActionIconControllerListener(Drawable draw, DraweeHolder holder) {
            super(holder);
            drawable = draw;
        }

        @Override
        protected void setDrawable(Drawable d) {
            drawable = d;
        }
    }
}
