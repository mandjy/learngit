package com.company;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class InvokeScriptFunction {
        public static void main(String[] args) throws Exception {
            ScriptEngineManager manager = new ScriptEngineManager();
            ScriptEngine engine = manager.getEngineByName("nashorn");
            // read script file
            engine.eval(Files.newBufferedReader(Paths.get("src/js/sprite.js"), StandardCharsets.UTF_8));
            Invocable inv = (Invocable) engine;
            // call function from script file
            inv.invokeFunction("Spritesmith.run", null);

    }
}



