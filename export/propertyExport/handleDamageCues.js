const handleDamageCues = ({
    chIndex,
    data,
    timeSeconds,
    result,
    states,
  }) => {
    const {players, pawnChannelToStateChannel} = states;
    const stateChannel = pawnChannelToStateChannel[chIndex];
    
    if (!stateChannel) return;

    for (const player in players) {
        if (players[player].Instigator !== data.HitActor || data.Magnitude === 0) continue;

        result.gameData.damageCues.push({
            timeSeconds: timeSeconds,
            damageSourcePlayer: players[stateChannel].UniqueID || players[stateChannel].BotUniqueId,
            damageTargetPlayer: players[player].UniqueID || players[player].BotUniqueId,
            damageMagnitude: data.Magnitude,
            bIsFatal: data.bIsFatal,
            bIsCritical: data.bIsCritical,
            bIsShield: data.bIsShield,
            bIsShieldDestroyed: data.bIsShieldDestroyed,
        })
        
    }

    
};

module.exports = handleDamageCues;
  