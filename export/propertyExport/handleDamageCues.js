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

    const DamageSrcPlayerName = players[stateChannel].PlayerNamePrivate;

    for (const player in players) {
        if (players[player].Instigator !== data.HitActor || data.Magnitude === 0) continue;

        result.gameData.damageCues.push({
            timeSeconds: timeSeconds,
            damageSourcePlayer: DamageSrcPlayerName,
            damageTargetPlayer: players[player].PlayerNamePrivate,
            damageMagnitude: data.Magnitude,
            bIsFatal: data.bIsFatal,
            bIsCritical: data.bIsCritical,
            bIsShield: data.bIsShield,
            bIsShieldDestroyed: data.bIsShieldDestroyed,
        })
        
    }

    
};

module.exports = handleDamageCues;
  