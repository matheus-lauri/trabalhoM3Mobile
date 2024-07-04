import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const FormularioCategoria = ({ onSave, onCancel, categoria }) => {
    const [nome, setNome] = useState(categoria ? categoria.nome : '');
    const [limite, setLimite] = useState(categoria ? categoria.limite.toString() : '');
    const [erro, setErro] = useState('');

    const handleSave = () => {
        if (nome && limite && !isNaN(parseFloat(limite))) {
            onSave({ nome, limite: parseFloat(limite) });
            setNome('');
            setLimite('');
            setErro('');
        } else {
            setErro('Por favor, insira um valor numérico válido para o limite.');
        }
    };

    const handleLimiteChange = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setLimite(text);
            setErro('');
        } else {
            setErro('Por favor, insira apenas números e ponto decimal.');
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Preencha os campos:</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Nome da Categoria"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Limite"
                value={limite}
                onChangeText={handleLimiteChange}
                keyboardType="numeric"
            />
            {erro ? <Text style={styles.errorText}>{erro}</Text> : null}
            <Button title="Salvar" onPress={handleSave} color="#4C8FF7" />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        position: 'absolute',
        top: '20%',
        left: '10%',
        right: '10%',
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4C8FF7',
        marginBottom: 10,
        textAlign: 'left',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4C8FF7',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default FormularioCategoria;