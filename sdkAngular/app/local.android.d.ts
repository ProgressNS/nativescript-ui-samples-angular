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
}
