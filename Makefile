all:
	make clean && make add && make build_ios && make build_droid
all_ios_build:
	make clean && make add && make build_ios
all_droid_build:
	make clean && make add && make build_droid
all_ios_run:
	make clean && make add && make run_ios
all_droid_run:
	make clean && make add && make run_droid
list:
	cordova plugin list
add:
	make add-remote
	#make add-local
add-remote:
	cordova plugin add ibm-mfp-push
	#cordova plugin add "https://github.com/ibm-bluemix-mobile-services/bms-clientsdk-cordova-plugin-push.git#development"
	#cordova plugin add ../mfppush-development/mfppush-plugin/tests
add-local:
	cordova plugin add ../mfpcore-development/mfpcore-plugin
	cordova plugin add ../mfppush-development/mfppush-plugin
	#cordova plugin add ../mfppush-development/mfppush-plugin/tests
clean:
	cordova plugin remove ibm-mfp-push
	#cordova plugin remove ibm-mfp-push-tests
	#cordova plugin remove ibm-mfp-core
pf_ios:
	cordova platform add ios
pf_droid:
	cordova platform add android
remove_pf_ios:
	cordova platform add ios
remove_pf_droid:
	cordova platform add android
build_droid:
	cordova build android
build_ios:
	cordova build ios
build: 
	make build_droid
	make build_ios
run_droid:
	cordova run android
run_ios:
	cordova run ios
test_droid:
	mv config.xml bak_config.xml
	sed 's/content src="index.html"/content src="cdvtests\/index.html"/g' bak_config.xml >> config.xml
	cordova run android
	rm config.xml
	mv bak_config.xml config.xml
test_ios:
	mv config.xml bak_config.xml
	sed 's/content src="index.html"/content src="cdvtests\/index.html"/g' bak_config.xml >> config.xml
	cordova run ios
	rm config.xml
	mv bak_config.xml config.xml
