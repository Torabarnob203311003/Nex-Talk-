import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    let { roomID } = useParams();

    const myMeeting = async () => {
        const appID = 732766992;  // Your ZEGOCLOUD App ID
        const serverSecret = 'aded039ab052bd4cd1a154f70b436e95';  // Your Server Secret

        // Generate Kit Token
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Torab Arnob" // User Name
        );

        // Create and join the room
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: document.getElementById('video-container'),
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, // Group call mode
            },
            showScreenSharingButton: true,  // Enable screen sharing
            showPreJoinView: true,  // Show preview before joining
            showLayoutButton: true,  // Option to change layout
            onLeaveRoom: () => {
                alert("You have left the room!");
            },
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `${window.location.origin}/room/${roomID}`,  // Shareable link
                },
            ],
        });
    };

    useEffect(() => {
        myMeeting();
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div id="video-container" className="w-full h-full rounded-lg shadow-lg"></div>
        </div>
    );
}

export default Room;
