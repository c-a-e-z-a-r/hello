  function replaceScript(oldScript, newScript) {
    // Find and remove the old script
    let scriptToRemove = document.querySelector(`script[src="${oldScript}"]`);
    if (scriptToRemove) {
        scriptToRemove.remove();
    }

    // Add the new script dynamically
    let newScriptTag = document.createElement("script");
    newScriptTag.src = newScript;
    newScriptTag.defer = true;
    document.body.appendChild(newScriptTag);
}