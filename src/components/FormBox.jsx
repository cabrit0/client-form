import React from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const FormBox = () => {
  return (
    <Box margin="auto" p={5} minW={280} maxW={400}>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          color="white"
          p={2}
          mb={3}
          _hover="#f5c451"
          borderColor=""
          focusBorderColor="#f5c451"
          placeholder=""
          _placeholder={{ opacity: 0.7, color: "#e9ecef" }}
        />
        <FormLabel>Email</FormLabel>
        <Input
          color="white"
          p={2}
          mb={3}
          _hover="#f5c451"
          borderColor=""
          focusBorderColor="#f1bd42"
          placeholder="exemplo@email.net"
          _placeholder={{ opacity: 0.7, color: "#e9ecef" }}
        />
        <FormLabel>Telemovel</FormLabel>
        <Input
          color="white"
          type="number"
          p={2}
          mb={3}
          _hover="#f5c451"
          borderColor=""
          focusBorderColor="#f5c451"
          placeholder="+351"
          _placeholder={{ opacity: 0.7, color: "#e9ecef" }}
        />
        <FormLabel>Menssagem</FormLabel>
        <Textarea
          color="white"
          p={2}
          mb={3}
          _hover="#f5c451"
          borderColor=""
          focusBorderColor="#f5c451"
          placeholder="Fala-nos um pouco de ti, e sobre os teus objetivos..."
          _placeholder={{ opacity: 0.7, color: "#e9ecef" }}
        />
        <Button
          colorScheme="#f5c451"
          opacity=".7"
          variant="outline"
          _hover={{ opacity: 1 }}
        >
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
};

export default FormBox;
