import { Component } from 'react';
import { MaterialEditorForm } from './components/MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from './components/MaterialList/MaterialList';
import * as API from './services/api';

export class MaterialCRUD extends Component {
  state = { materials: [], isLoading: false };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({ materials: [...state.materials, material], isLoading: false }));
    } catch (error) {
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updateMaterial : material
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading, materials } = this.state;
    return (
      <>
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading && <div>loading ...</div>}
        <MaterialList
          items={materials}
          onDelete={this.deleteMaterial}
          onUpdate={this.updateMaterial}
        />
      </>
    );
  }
}
