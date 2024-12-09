import React, { useEffect } from 'react';
import { Accessibility as AccessibilityLib } from 'accessibility'; // Importar a biblioteca

function Accessibility() {
    useEffect(() => {
        const options = {
            labels: {
                resetTitle: 'Redefinir',
                closeTitle: 'Fechar',
                menuTitle: 'Acessibilidade',
                increaseText: 'Aumentar tamanho do texto',
                decreaseText: 'Diminuir tamanho do texto',
                increaseTextSpacing: 'Aumentar espaçamento do texto',
                decreaseTextSpacing: 'Diminuir espaçamento do texto',
                increaseLineHeight: 'Aumentar altura da linha',
                decreaseLineHeight: 'Diminuir altura da linha',
                invertColors: 'Inverter cores',
                grayHues: 'Escala de cinza',
                underlineLinks: 'Sublinhar links',
                bigCursor: 'Cursor grande',
                readingGuide: 'Guia de leitura',
                textToSpeech: 'Texto para fala',
                speechToText: 'Fala para texto',
                disableAnimations: 'Desativar animações',
                hotkeyPrefix: 'Atalho:'
            },
            // testar para ver se e melhor que o que já existe
            textToSpeechLang: 'pt-BR', //Falar em  para português 
            speechToTextLang: 'pt-BR' // Falar em  para português 
        };

        // Inicializa a biblioteca de acessibilidade
        new AccessibilityLib(options);
    }, []);
    return null; 
}

export default Accessibility;
