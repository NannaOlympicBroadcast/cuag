# cuag
A realization of an RTC communication, collaboration and cloud gaming platform based on Volcengine
# A suggested method of deployment
1. Use a dedicated physical server with RAM at least 64GB and 2 RTX 40 series GPU or equivalent.
2. Cast the IP of the server to a public IP or dormain by intranet penetration
3. Using sub domains to cast different ports of the server
4. You can also deploy it on LAN environment but the environment should have access to the Internet to ensure voice and video transmission
# Basic Function
1. Collabration Debug with voice and text chat
2. Cloud Game
3. Sell out your GPU resource(if you have NVIDIA GPU or AMD GPU) for a project that needs GPUS
4. Remote Linux Virtual Machine
# 3-rd Party services or projects integrated
1. VolcEngine RTC+RTM Powered By Bytedance Inc: Realtime Voice and Video Communication
2. code-server: Collaborate Coding
# Quickly StartUp
run
```shell
#windows
python setupwizard.py

#linux
python3 setupwizard.py
```
