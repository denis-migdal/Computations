#!/usr/bin/bash

ROOT=$(realpath .)

cat << EOF > /usr/local/bin/graph
#!/usr/bin/bash
exec $ROOT/bin/graph.ts "\$@"
EOF

cat << EOF > /usr/local/bin/calc
#!/usr/bin/bash
exec $ROOT/bin/calc.ts "\$@"
EOF

chmod +x /usr/local/bin/{graph,calc}