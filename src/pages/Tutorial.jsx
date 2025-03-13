import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // Verde oscuro
      light: "#4caf50", // Verde medio
      dark: "#1b5e20", // Verde más oscuro
    },
    text: {
      primary: "#1b5e20",
      secondary: "#388e3c",
    },
    background: {
      default: "#f1f8e9",
      paper: "#ffffff",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#f1f8e9",
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "& .MuiStepLabel-label": {
            fontWeight: 500,
            color: "#2e7d32",
          },
          "& .MuiStepIcon-root": {
            color: "#4caf50",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#2e7d32",
          },
        },
      },
    },
  },
});

const Tutorial = () => {
  const stageColors = {
    Idea: "#f87272", // btn-error
    "Mesa directiva": "#fbbd23", // btn-warning
    "Comision Previa": "#36d399", // btn-success
    Juridico: "#570df8", // btn-primary
    Comision: "#3abff8", // btn-info
    Pleno: "#e5e5e5", // btn-neutral
  };
  const steps = [
    {
      label: "Título de la Propuesta",
      description: "Escriba un título claro y conciso que refleje el propósito principal de su propuesta legislativa.",
      tips: [
        "Sea específico y directo",
        "Evite títulos demasiado largos",
        "Asegúrese que refleje el contenido de la iniciativa",
      ],
      stage: "Idea"
    },
    {
      label: "Introducción y Justificación",
      description: "Explique detalladamente por qué propone esta ley o reforma, identificando problemas o necesidades específicas.",
      tips: [
        "Presente el contexto actual",
        "Identifique claramente el problema",
        "Explique por qué es necesario abordar este tema ahora",
      ],
      stage: "Mesa directiva"
    },
    {
      label: "Objetivos",
      description: "Defina claramente los objetivos que pretende lograr con su propuesta legislativa.",
      tips: [
        "Sea específico y medible",
        "Alinee los objetivos con la justificación",
        "Use verbos de acción",
      ],
      stage: "Comision Previa"
    },
    {
      label: "Propuesta de Modificación",
      description: "Describa las modificaciones específicas o nuevas leyes que propone.",
      tips: [
        "Sea preciso en los cambios propuestos",
        "Cite artículos específicos si modifica leyes existentes",
        "Incluya el texto exacto de las modificaciones",
      ],
      stage: "Juridico"
    },
    {
      label: "Impacto Esperado",
      description: "Analice los efectos que tendría su propuesta en diferentes ámbitos.",
      tips: [
        "Considere impactos sociales",
        "Evalúe efectos económicos",
        "Incluya impactos ambientales si aplica",
      ],
      stage: "Comision"
    },
    {
      label: "Implementación",
      description: "Explique cómo se llevará a cabo la implementación de la propuesta.",
      tips: [
        "Defina responsables",
        "Establezca plazos realistas",
        "Considere recursos necesarios",
      ],
      stage: "Pleno"
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          color="primary"
          sx={{
            fontWeight: 700,
            mb: 4,
          }}
        >
          Tutorial: Cómo Registrar una Iniciativa
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: "primary.light",
            }}
          >
            <Typography variant="h6">
              Este tutorial le guiará paso a paso en el proceso de registro de
              una iniciativa legislativa. Siga cada sección cuidadosamente para
              asegurar que su propuesta sea completa y efectiva.
            </Typography>
          </Paper>
        </Box>

        <Stepper
          orientation="vertical"
          sx={{
            mb: 4,
            "& .MuiStepConnector-line": {
              minHeight: 40,
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} active={true}>
              <StepLabel>
                <Typography
                  variant="h6"
                  sx={{
                    color: stageColors[step.stage],
                    fontWeight: 600,
                  }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
              <Box sx={{ ml: 4, mt: 2, mb: 4 }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: stageColors[step.stage],
                    "&:hover": {
                      boxShadow: 6,
                      borderWidth: 2,
                    },
                  }}
                >
                  <Typography variant="body1" paragraph>
                    {step.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: stageColors[step.stage] }}
                  >
                    Consejos útiles:
                  </Typography>
                  <ul style={{ paddingLeft: "20px" }}>
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <Typography
                          variant="body2"
                          sx={{
                            py: 0.5,
                            color: "text.secondary",
                          }}
                        >
                          {tip}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Box>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 6 }}>
          <Paper elevation={2} sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
            <Typography variant="body1" paragraph>
              Recuerde que una iniciativa bien estructurada tiene más
              probabilidades de ser considerada y aprobada. Tome el tiempo
              necesario para desarrollar cada sección con detalle y precisión.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "primary.main",
              }}
            >
              Si necesita ayuda adicional, no dude en consultar nuestra sección
              de preguntas frecuentes o contactar a nuestro equipo de soporte.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Tutorial;
