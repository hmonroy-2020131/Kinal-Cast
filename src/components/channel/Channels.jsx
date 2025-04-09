import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Channels = ({channels}) => {
    const navigate = useNavigate()

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`)
    }

    return(
        <div className="channels-container">
            { Channels.map((c) =>(
                <ChannelCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    )
}