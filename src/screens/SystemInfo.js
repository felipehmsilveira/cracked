import React, { useEffect, useState } from 'react';
import * as Device from 'expo-device';
import { Text } from 'react-native-paper'
import { View } from 'react-native'

export default function SystemInfo() {

    const setup = {}
    
    useEffect(() => {
        (async () => {
            
            console.log('System Info: ');

            setup.isDevice = Device.isDevice;
            setup.brand = Device.brand;
            setup.manufacturer = Device.manufacturer;
            setup.modelName = Device.modelName;
            setup.modelId = Device.modelId;
            setup.designName = Device.designName;
            setup.productName = Device.productName;
            setup.deviceYearClass = Device.deviceYearClass;
            setup.totalMemory = Device.totalMemory;
            setup.supportedCpuArchitectures = Device.supportedCpuArchitectures;
            setup.osName = Device.osName; 
            setup.osVersion = Device.osVersion; 
            setup.osBuildId = Device.osBuildId; 
            setup.osInternalBuildId = Device.osInternalBuildId; 
            setup.osBuildFingerprint = Device.osBuildFingerprint; 
            setup.platformApiLevel = Device.platformApiLevel; 
            setup.deviceName = Device.deviceName; 

            setup.getUptimeAsync = await Device.getUptimeAsync();
            setup.getMaxMemoryAsync = await Device.getMaxMemoryAsync();
            setup.isRootedExperimentalAsync = await Device.isRootedExperimentalAsync();
            setup.isSideLoadingEnabledAsync = await Device.isSideLoadingEnabledAsync();
            setup.getPlatformFeaturesAsync = await Device.getPlatformFeaturesAsync();

            //console.log(setup);
        })();
    }, []);

    return (
        <View>
            <Text>System Info Module</Text>
        </View>
    );
}