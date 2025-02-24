//your JS code here. If required.
        document.getElementById("change_button").addEventListener("click", function() {
            const blockId = document.getElementById("block_id").value;
            const color = document.getElementById("colour_id").value;
            
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.backgroundColor = "transparent";
            });
            
            if (blockId >= 1 && blockId <= 9) {
                document.getElementById(blockId).style.backgroundColor = color;
            }
        });
        
        document.getElementById("Reset").addEventListener("click", function() {
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.backgroundColor = "transparent";
            });
        });
    </script>
</body>

