import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import Categoria from './Categoria';
import FormularioCategoria from './FormularioCategoria';

const MainApp = () => {
  const [categorias, setCategorias] = useState([]);
  const [formularioVisivel, setFormularioVisivel] = useState(false);
  const [categoriaEdicao, setCategoriaEdicao] = useState(null);

  const adicionarCategoria = (categoria) => {
    if (categoriaEdicao) {
      const index = categorias.findIndex((cat) => cat.nome === categoriaEdicao.nome);
      const novasCategorias = [...categorias];
      novasCategorias[index] = { ...categoria, valor: categoriaEdicao.valor };
      setCategorias(novasCategorias);
    } else {
      const valor = parseFloat((Math.random() * categoria.limite).toFixed(2));
      setCategorias([...categorias, { ...categoria, valor }]);
    }
    setFormularioVisivel(false);
    setCategoriaEdicao(null);
  };

  const editarCategoria = (categoria) => {
    setCategoriaEdicao(categoria);
    setFormularioVisivel(true);
  };

  const excluirCategoria = (categoria) => {
    const novasCategorias = categorias.filter((cat) => cat.nome !== categoria.nome);
    setCategorias(novasCategorias);
  };

  const cancelarFormulario = () => {
    setFormularioVisivel(false);
    setCategoriaEdicao(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <Categoria
            nome={item.nome}
            limite={item.limite}
            valor={item.valor}
            onEdit={() => editarCategoria(item)}
            onDelete={() => excluirCategoria(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Adicionar Categoria" onPress={() => setFormularioVisivel(true)} color="#4C8FF7" />
      {formularioVisivel && (
        <FormularioCategoria
          onSave={adicionarCategoria}
          onCancel={cancelarFormulario}
          categoria={categoriaEdicao}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default MainApp;