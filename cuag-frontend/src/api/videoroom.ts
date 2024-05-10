import axios from "axios";
import {ElMessage} from "element-plus";

const VIDEO_ROOM_MODULE=`/api/videoroom`
import VERTC, {RoomProfileType} from '@volcengine/rtc';
import vue from "@vitejs/plugin-vue";

export const getSDKInitInfo =()=>{
    axios.post(`${VIDEO_ROOM_MODULE}/initSDK`).then(
        res =>{
            if(res.data.code==='000'){
                localStorage.setItem("volc_appId",res.data.result.appId)
                localStorage.setItem("volc_ak",res.data.result.ak)
                localStorage.setItem("volc_sk",res.data.result.sk)
                vue.prototype.RTCSDK= VERTC.createEngine(res.data.result.appId)
            }else{
                ElMessage({
                    message:"无法获得SDK密钥",
                    center:true,
                    type:"error"
                })
            }
        }
    )
}

export const joinRoomCall=async (roomId: number) => {
    try {
        await vue.prototype.RTCSDK
            .joinRoom(
                sessionStorage.getItem("token"),
                roomId,
                {
                    userId: sessionStorage.getItem("uid"),
                },
                {
                    isAutoPublish: true, // 采集音视频时自动发布到房间
                    isAutoSubscribeAudio: true, // 自动订阅音频
                    isAutoSubscribeVideo: true, // 自动订阅视频
                    roomProfileType: RoomProfileType.communication // 普通音视频通话模式，例如，语音聊天室
                })
    } catch (e) {

    }
}