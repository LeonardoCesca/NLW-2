import React from 'react';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Estes são os proffys disponíveis."
                description = "O primeiro passo é preencher o formulário de inscrição"                
            />
        </div>
    )
}

export default TeacherForm;