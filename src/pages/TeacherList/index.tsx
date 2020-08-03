import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" name="" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" name="" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" name="" id="time"/>
                    </div>
                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;