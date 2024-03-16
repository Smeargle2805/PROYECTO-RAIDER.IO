import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { styles, pickerSelectStyles } from '../../styles/CutOffs';
import RNPickerSelect from 'react-native-picker-select';

const SeasonCutoffs = () => {
    const [region, setRegion] = useState('us');
    const [seasonData, setSeasonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [cutoffsData, setCutoffsData] = useState(null);

    useEffect(() => {
        const fetchSeasonData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-3&region=${region}`);
                setSeasonData(response.data);
            } catch (error) {
                console.error('Error fetching season data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSeasonData();
    }, [region]);

    useEffect(() => {
        const fetchCutoffsData = async () => {
            if (!seasonData) return;

            try {
                const response = await axios.get(`https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-3&region=${region}`);
                setCutoffsData(response.data.cutoffs);
            } catch (error) {
                console.error('Error fetching cutoffs data:', error);
            }
        };

        fetchCutoffsData();
    }, [region, seasonData]);

    const renderTable = () => {
        if (!cutoffsData || Object.keys(cutoffsData).length === 0) return null;

        return (
            <View style={styles.marco}>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <Text style={styles.headerCell}>CutOff</Text>
                        <Text style={styles.headerCell}>All</Text>
                        <Text style={styles.headerCell}>Horde</Text>
                        <Text style={styles.headerCell}>Alliance</Text>
                    </View>
                    {Object.keys(cutoffsData).map((key) => {
                        const cutoff = cutoffsData[key];
                        const hordeColor = cutoff.hordeColor;
                        const allianceColor = cutoff.allianceColor;
                        const allColor = cutoff.allColor;

                        if (!cutoff.horde || !cutoff.alliance || !cutoff.all) return null;

                        return (
                            <View key={key} style={styles.row}>
                                <Text style={styles.cell}>{key}</Text>
                                <Text style={[styles.cell, { color: allColor }]}>{cutoff.all.quantileMinValue.toFixed(2)}</Text>
                                <Text style={[styles.cell, { color: hordeColor }]}>{cutoff.horde.quantileMinValue.toFixed(2)}</Text>
                                <Text style={[styles.cell, { color: allianceColor }]}>{cutoff.alliance.quantileMinValue.toFixed(2)}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>Selecciona una Región</Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Selecciona una Región', value: null }}
                        onValueChange={(value) => setRegion(value)}
                        items={[
                            { label: 'America y Oceania', value: 'us' },
                            { label: 'Europa', value: 'eu' },
                            { label: 'Taiwan', value: 'tw' },
                            { label: 'Corea', value: 'kr' },
                            { label: 'China', value: 'cn' },
                        ]}
                        style={pickerSelectStyles}
                        value={region}
                    />
                </View>
            </View>

            {isLoading ? (
                <Text>Cargando datos...</Text>
            ) : (
                renderTable()
            )}
        </View>
    );
};

export default SeasonCutoffs;
