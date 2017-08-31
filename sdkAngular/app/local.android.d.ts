declare module java {
    module text {
        class SimpleDateFormat {
            constructor(string, Locale);
        }
    }

    module util {
        enum Locale {
            US
        }
    }
}

declare module android {
    module support {
        module v7 {
            module app {
                class AppCompatActivity {
                    protected onCreate(savedInstanceState: android.os.Bundle);
                    protected onSaveInstanceState(outState: android.os.Bundle);
                    protected onStart();
                    protected onStop();
                    protected onDestroy();
                    protected onBackPressed();
                    protected onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent);
                }
            }
        }
    }

    module os {
        class Bundle {
        }
    }

    module content {
        class Intent {
        }
    }

    module graphics {
        module PorterDuff {
            class Mode {
                static SRC_IN;
            }

        }
        class PorterDuffColorFilter {
            constructor(arg1, arg2);

        }
        module drawable {
            class GradientDrawable {
                setStroke(width, stroke);
                setCornerRadius(radius);
                setColor(color);
            }
        }
    }
    module view {
        module View {
            class OnClickListener{
                constructor(impl);
            }
        }
        class View {
            constructor(context);
            setOnClickListener(listener);
        }
    }
    module widget {

        class LinearLayout {
            labelView();
            decreaseView();
            increaseView();
            static SHOW_DIVIDER_MIDDLE;
        }
        class RadioGroup {
            setBackgroundColor(arg);
            setPadding(l, t, r, b);
            setShowDividers(arg);
            setDividerDrawable(arg);
        }
        class SeekBar {
            getThumb();
            getProgressDrawable();
        }

        class Button extends view.View {
        }

        class RadioButton {
        }
    }
}
