export interface ILanSysScheduleOutputItem {
    pwr: number;
    snSuffix: string;
    workmode: number;
}

export interface ILanSysScheduleOutput {
    output: ILanSysScheduleOutputItem[];
}

export interface IV1p3 {
    sysChgDsgState: number;
    dsgDisableCond: number;
    emsHeartbeatVer: number;
    chgLinePlugInFlag: number;
    chgDisableCond: number;
}

export interface IV1p0 {
    chgCmd: number;
    maxAvailableNum: number;
    chgRemainTime: number;
    lcdShowSoc: number;
    maxCloseOilEbSoc: number;
    bmsIsConnt: number[];
    chgState: number;
    chgVol: number;
    openUpsFlag: number;
    bmsModel: number;
    dsgCmd: number;
    f32LcdShowSoc: number;
    paraVolMax: number;
    maxChargeSoc: number;
    dsgRemainTime: number;
    minOpenOilEbSoc: number;
    fanLevel: number;
    chgAmp: number;
    emsIsNormalFlag: number;
    minDsgSoc: number;
    bmsWarningState: number;
    openBmsIdx: number;
    paraVolMin: number;
}

// Optionale Sub-Strukturen aus deinem JSON für absolute Typsicherheit
export interface IGridConnectionPortBind {
    err?: number;
    portNum?: number;
    sn?: string;
}

export interface ICloudMeter {
    phaseCPower?: number;
    phaseBPower?: number;
    model?: string;
    phaseAPower?: number;
    sn?: string;
    hasMeter?: boolean;
}

export interface ILocalMeter {
    phaseCPower?: number;
    totalImportKwh?: number;
    phaseACur?: number;
    phaseAPower?: number;
    phaseBCur?: number;
    phaseCCur?: number;
    totalPwr?: number;
    phaseBPower?: number;
    totalExportKwh?: number;
    smrVersion?: number;
    phaseCVol?: number;
    online?: number;
    timeInterval?: number;
    model?: string;
    sn?: string;
    meterModel?: string;
    phaseAVol?: number;
    phaseBVol?: number;
}

export interface IEcoFlowData {
    // Photovoltaik & Leistung
    powGetPvSum?: number;
    powGetPv?: number;
    powGetPv2?: number;
    powGetPv3?: number;
    powGetPv4?: number;
    pinPv1?: number;
    pinPv2?: number;
    pinPv3?: number;
    pinPv4?: number;
    iinPv1?: number;
    iinPv2?: number;
    iinPv3?: number;
    iinPv4?: number;
    vinPv1?: number;
    vinPv2?: number;
    vinPv3?: number;
    vinPv4?: number;
    plugInInfoPvVol?: number;
    plugInInfoPv2Vol?: number;
    plugInInfoPv3Vol?: number;
    plugInInfoPv4Vol?: number;
    plugInInfoPvAmp?: number;
    plugInInfoPv2Amp?: number;
    plugInInfoPv3Amp?: number;
    plugInInfoPv4Amp?: number;
    plugInInfoPvFlag?: boolean;
    plugInInfoPv2Flag?: boolean;
    plugInInfoPv3Flag?: boolean;
    plugInInfoPv4Flag?: boolean;
    pvIoutFilt?: number;

    // Netz, Grid & Inverter (Wechselrichter)
    powGetSysGrid?: number;
    gridConnectionPower?: number;
    sysGridConnectionPower?: number;
    gridConnectionVol?: number;
    gridConnectionFreq?: number;
    gridConnectionSta?: string;
    ongridIinRms?: number;
    ongridInActivePower?: number;
    ongridActivePowerRef?: number;
    activePowerNeed?: number;
    acTotalActivePower?: number;
    sysGridInPwrLimit?: number;
    feedGridMode?: number;
    feedGridModePowMax?: number;
    feedGridModePowLimit?: number;
    maxInvInput?: number;
    maxInvOutput?: number;
    ongridVoutRms?: number;
    ongridVinRms?: number;
    invVcapRms?: number;
    invIl1Rms?: number;
    acStandbyTime?: number;

    // Lasten & Verteilung
    powGetSysLoad?: number;
    powGetSysLoadFromPv?: number;
    powGetSysLoadFromGrid?: number;
    powGetSysLoadFromBp?: number;
    cascadeSysDistributedPwrSum?: number;
    cascadeSysTargetPwr?: number;
    lanSysTargetPwr?: number;
    lanSysHomeNeedPwr?: number;
    dev1DistributeTarget?: number;
    dev2DistributeTarget?: number;
    dev3DistributeTarget?: number;
    dev4DistributeTarget?: number;
    dev5DistributeTarget?: number;
    dev6DistributeTarget?: number;
    dev1ToPcsPwr?: number;
    dev2ToPcsPwr?: number;
    dev3ToPcsPwr?: number;
    dev4ToPcsPwr?: number;
    dev5ToPcsPwr?: number;
    dev6ToPcsPwr?: number;
    outputWatts?: number;
    inputWatts?: number;

    // Batterie (BMS / CMS) & SOC
    soc?: number;
    cmsBattSoc?: number;
    bmsBattSoc?: number;
    f32ShowSoc?: number;
    diffSoc?: number;
    actSoc?: number;
    targetSoc?: number;
    soh?: number;
    cmsBattSoh?: number;
    bmsBattSoh?: number;
    realSoh?: number;
    calendarSoh?: number;
    cycleSoh?: number;
    cycles?: number;
    designCap?: number;
    bmsDesignCap?: number;
    fullCap?: number;
    remainCap?: number;
    accuDsgCap?: number;
    accuChgCap?: number;
    accuChgEnergy?: number;
    accuDsgEnergy?: number;
    vol?: number;
    vBat?: number;
    amp?: number;
    vBus?: number;
    vBusHv?: number;
    ioutBat?: number;
    bmsSn?: string;
    packSn?: string;
    bmsBattHeating?: boolean;

    // Status, Relais & Steuerung
    powGetBpCms?: number;
    curAvaiToBmsPower?: number;
    bmsChgReqCurr?: number;
    bmsChgReqVolt?: number;
    exPsD1?: number;
    seriesPower?: number;
    dcvFilt?: number;
    dciFilt?: number;
    chgDsgState?: number;
    bmsChgDsgState?: number;
    cmsChgDsgState?: number;
    cmsBmsRunState?: number;
    sysPwrFlag?: number;
    balanceCmd?: number;
    bqSysStatReg?: number;
    pwr12v?: number;
    openBmsFlag?: number;
    mosState?: number;
    afeSysStatus?: number;
    sysState?: number;
    balanceState?: number;
    waterInFlag?: number;
    devCtrlStatus?: number;
    relay1Onoff?: boolean;
    relay2Onoff?: boolean;
    relay3Onoff?: boolean;
    relay4Onoff?: boolean;
    moduleWifiRssi?: number;
    utcTimezoneId?: string;
    utcTimezone?: number;

    // Fehler & Alarme
    errCode?: number;
    allErrCode?: number;
    allBmsFault?: number;
    bmsFault?: number;
    bmsFaultState?: number;
    bmsAlarmState1?: number;
    bmsAlarmState2?: number;
    bmsProtectState1?: number;
    bmsProtectState2?: number;
    invFault?: number;
    invFaultLock?: number;
    dabFault?: number;
    dabFaultLock?: number;

    // Temperaturen (inkl. Inverter & DC-Wandler NTCs)
    temp?: number;
    invTempNtc?: number; // NEU: Wichtig für die Inverter-Temperatur!
    maxCellTemp?: number;
    minCellTemp?: number;
    maxMosTemp?: number;
    minMosTemp?: number;
    cellTemp?: number[];
    mosTemp?: number[];
    powerportTemp?: number[];
    heatfilmTemp?: number[];
    minHeatfilmTemp?: number;
    maxHeatfilmTemp?: number;
    curSensorTemp?: number[]; // Wichtig: optional, da im JSON leeres Array []
    envTemp?: number[];       // Wichtig: optional, da im JSON leeres Array []
    minEnvTemp?: number;
    maxEnvTemp?: number;
    minCurSensorTemp?: number;
    maxCurSensorTemp?: number;
    dcTemp1Ntc?: number;      // NEU: DC-Wandler Temp 1
    dcTemp2Ntc?: number;      // NEU: DC-Wandler Temp 2
    dcTemp3Ntc?: number;      // NEU: DC-Wandler Temp 3
    dabHighTempNtc?: number;  // NEU: DAB Hochtemperatursensor
    dabLvTempNtc?: number;    // NEU: DAB Niedrigtemperatursensor

    // Zellen-Spezifikationen
    cellVol?: number[];
    minCellVol?: number;
    maxCellVol?: number;
    maxVolDiff?: number;
    cellNtcNum?: number;
    cellSeriesNum?: number;
    mosNtcNum?: number;
    powerportNtcNum?: number;
    curSensorNtcNum?: number;
    heatfilmNtcNum?: number;
    envNtcNum?: number;
    remainBalanceTime?: number[];

    // Zeiten
    remainTime?: number;
    cmsChgRemTime?: number;
    bmsChgRemTime?: number;
    cmsDsgRemTime?: number;
    bmsDsgRemTime?: number;

    // System & Versionen
    sysVer?: number;
    hwVer?: string;
    productType?: number;
    productDetail?: number;
    bmsHeartbeatVer?: number;
    sysLoaderVer?: number;
    type?: number;
    num?: number;
    mcuPinOutStatus?: number;
    mcuPinInStatus?: number;
    tagChgAmp?: number;
    ecloudOcv?: number;

    // Verschachtelte Objekte
    lanSysScheduleOutput?: ILanSysScheduleOutput;
    v1p3?: IV1p3;
    v1p0?: IV1p0;
    gridConnectionPortBind?: IGridConnectionPortBind;
    cloudMetter?: ICloudMeter; // Vorsicht: Im JSON "cloudMetter" mit Doppel-t geschrieben!
    localMeter?: ILocalMeter;
}
