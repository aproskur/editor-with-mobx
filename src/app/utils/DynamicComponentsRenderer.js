import React from 'react';
import GameScreen from '../components/library/GameScreen';
import GameCard from '../components/library/GameCard';
import GameArea from '../components/library/GameArea';


const componentMap = {
    cardsScreen: GameScreen,
    card: GameCard,
    areaComponent: GameArea,
}

export const renderComponent = (componentData) => {
    //Skip non-UI components !!!NOT necessary , there will be no UI. All that us in view is UI
    if (componentData.class !== 'UI') {
        console.log(`Skipping non-UI component: ${componentData.name}`);
        return null;
    }

    //Check the component field exists
    if (!componentData.component) {
        console.error("Missing 'component' field:", componentData);
        return null;
    }

    //Lookup the component in the component map
    const Component = componentMap[componentData.component];
    if (!Component) {
        console.error("Unknown component type or missing mapping for", componentData.component);
        return null;
    }

    //Recursively process child components if they exist
    let childrenComponents = null;
    if (componentData.elements) {
        childrenComponents = Object.values(componentData.elements).map(renderComponent).filter(Boolean);
        if (childrenComponents.length === 0) {
            childrenComponents = null; //Avoid passing an empty array to React.createElement
        }
    }

    // Build the component props, including style if provided
    const props = { key: componentData.name, style: componentData.css };

    // Create the component with its children
    return React.createElement(Component, props, childrenComponents);
};