import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchData } from '../services/apiService';
import QuillEditor from "./QuillEditor";
import { renderComponent } from '../utils/DynamicComponentsRenderer';


const StyledDisplay = styled.div`
  height: 100vh;
  width: 96%;
  color: var(--clr-theme-yellow);
  padding: 0.5em;
  transition: width 0.3s, margin-left 0.3s;
  background: inherit;
`;




const configTestData = {
  "name": "TestCard",
  "class": "UI",
  "component": "card",
  "css": {
    "width": "300px",
    "height": "300px",
    "padding": "1.25em 1em",
    "backgroundColor": "rgba(162, 217, 247, 0.5)",
    "color": "#fff",
    "fontWeight": "bold",
    "fontSize": "15px"
  }
};

const configTestNestedData = {
  "$View": {
    "$platforms": {
      "react": {
        "app": {
          "class": "application",
          "elements": {
            "S1": {
              "name": "S1",
              "class": "UI",
              "component": "cardsScreen",
              "background": "",
              "cssFile": "",
              "css": {
                "display": "flex",
                "flexWrap": "wrap",
                "gap": "1em",
                "gridColumn": "2",
                "gridRow": "2",
                "backgroundColor": "rgba(34, 46, 80, 0.8)",
                "padding": "10px",
                "overflow": "auto"
              },
              "elements": {
                "TestCard": {
                  "name": "TestCard",
                  "class": "UI",
                  "component": "card",
                  "css": {
                    "width": "300px",
                    "height": "300px",
                    "padding": "1.25em 1em",
                    "backgroundColor": "rgba(162, 217, 247, 0.5)",
                    "color": "#fff",
                    "fontWeight": "bold",
                    "fontSize": "15px"
                  }
                }
              }
            }
          }
        }
      },
      "reactFlow": {}
    }
  }
};


const configData = {
  "$View": {
    "$platforms": {
      "react": {
        "app": {
          "class": "application",
          "elements": {
            "S1": {
              "name": "S1",
              "class": "UI",
              "component": "cardsScreen",
              "background": "",
              "cssFile": "",
              "css": {
                "display": "flex",
                "flexWrap": "wrap",
                "gap": "1em",
                "gridColumn": "2",
                "gridRow": "2",
                "backgroundColor": "rgba(34, 46, 80, 0.5)",
                "padding": "10px",
                "overflow": "auto"
              },
              "elements": {
                "A1": {
                  "name": "A1",
                  "class": "UI",
                  "component": "areaComponent",
                  "layout": {},
                  "cssFile": "",
                  "css": {
                    "backgroundColor": "pink",
                    "width": "500px",
                    "height": "500px"
                  },
                  "C1": {
                    "name": "C1",
                    "class": "UI",
                    "component": "card",
                    "css": {
                      "width": "300px",
                      "height": "500px",
                      "padding": "1.25em 1em",
                      "backgroundColor": "rgba(162, 217, 247, 0.5)",
                      "color": "#fff",
                      "fontWeight": "bold",
                      "fontSize": "15px"
                    },
                    "description": "",
                    "tags": "",
                    "states": {
                      "st1": {
                        "cssFile": "",
                        "css": {
                        },
                        "name": "front",
                      },
                      "st2": {
                        "cssFile": "",
                        "css": "",
                        "name": "back"
                      },
                      "$metaData": {
                        "name": {
                          "$description": {}
                        },
                        "$bindings": []
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "reactFlow": {}
    }
  }
}


export default function Display({ isEditorVisible }) {
  useEffect(() => {
    // fetchData() 
  }, []);

  return (
    <StyledDisplay>
      {renderComponent(configTestNestedData.$View.$platforms.react.app.elements.S1)}
      <QuillEditor isVisible={isEditorVisible} />
    </StyledDisplay>
  );
}