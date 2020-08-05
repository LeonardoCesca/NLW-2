import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Estes são os proffys disponíveis."
                description = "O primeiro passo é preencher o formulário de inscrição"                
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />

                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;