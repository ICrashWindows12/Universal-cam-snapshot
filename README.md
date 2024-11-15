# Universal-cam-snapshot
Universal Camera Snapshot feature. Works on all cameras using RTSP only.


# Step By Step (linux only/raspberry pi)
1. Enable a camera account (set up login details). The steps are different for each camera or any manufacturers camera.
2. Find any app that can play RTSP, eg. VLC, Onvif Device Manager, Blue Iris, and test that the camera works with the RTSP protocol, using the credentials you set.
3. Open terminal on your Linux Computer. 
4. Run ```sudo apt install ffmpeg && sudo apt install apache2``` if you need to install nano, just add ```&& sudo apt install nano```
5. Download the files in the repository as a Zip
6. Extract the Zip
7. Open up terminal.
8. Run ```cd /var/www/html``` then run ```sudo mv /path/to/files /var/www/html```
9. Navigate to /images/outputscript.sh and run ```sudo nano outputscript.sh```
10. Change the ```RTSP_URL``` value using this template: ```rtsp://user:password@0.0.0.0:PORT/examplestream``` --Yes it can also be domains that you could use, DDNS domains or just normal domains work, if you know how to configure it. PORT represents any port ranging from 1 to 65535. Port 554 is mostly used for RTSP protocol. /examplestream is where the video stream is located, eg. TP-Link Tapo cameras use ```/stream1``` and ```/stream2```.
11. You could also edit how long until next snapshot and when to delete the current snapshot. edit the 2 ```sleep``` values to whatever you want. Format is in Seconds, 1 minute = 60 seconds.
12. Hit ```Ctrl+O``` then ```enter``` or ```return``` to save your changes
13. Then go back to /var/www/html and run ```chmod +x properstart.sh && chmod +x /var/www/html/outputscript.sh && ./properstart.sh```

14. Your server should start. Navigate to on your web browser ```127.0.0.1:80``` or ```localhost:80``` or ```http://0.0.0.0:80```, replace 0.0.0.0 with the servers IP address.
15. You should see your camera now having snapshots.

# Port Forwarding
If you want to access the server away from wherever your server is, or as it is called, remote access. You need to port forward your servers port and cameras port.
But be warned, after you do this, anyone who knows your servers IP can access your server and camera, so set up some basic security to prevent anyone you dont know, from watching you. 
Port forwarding rules is usually located in your routers settings. This version of the universal snapshot feature does not include any security, so you may need to find tutorials on how to set up a basic login page. 

# Open Source
And this project is open source, so you can contribute to this project at 0 cost.

# Showcase
(soon)

# Issues
1. You may see this image if you didn't configure the camera correctly,you had either put in the wrong credentials, misspelt the url, forgot to put your cameras rtsp address in the shell script, did not set up the camera account, missplelt either the camera account username, password or both
![Camera Image](https://raw.githubusercontent.com/ICrashWindows12/Universal-cam-snapshot/refs/heads/main/images/current_status.jpg)
If you want to to stop the server, on the terminal page, use Ctrl+C then run ```sudo systemctl stop apache2```

# TODO
- Add a way to preserve snapshots (optional)
- Add basic login (set custom username and password)
- Add multiple camera support
