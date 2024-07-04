import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Categoria = ({ nome, limite, valor, onEdit, onDelete }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.nome}>{nome}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity onPress={onEdit} style={[styles.actionButton, styles.editButton]}>
                        <Text style={styles.actionButtonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete} style={[styles.actionButton, styles.deleteButton]}>
                        <Text style={styles.actionButtonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.limite}>Limite: {limite.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    limite: {
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
    },
    actionButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 5,
    },
    editButton: {
        backgroundColor: '#4C8FF7',
    },
    deleteButton: {
        backgroundColor: 'red',
    },
    actionButtonText: {
        color: '#fff',
    },
});

export default Categoria;