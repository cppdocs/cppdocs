---
title: "std::raise"
source_path: "cpp/utility/program/raise"
header: "<csignal>"
category: "utility"
---

Sends signal sig to the program. The signal handler (specified using the [std::signal()](/cpp/utility/program/signal/) function) is invoked.

## Declarations
```cpp
int raise( int sig );
```

## Parameters
- `sig`: the signal to be sent. It can be an implementation-defined value or one of the following values: SIGABRTSIGFPESIGILLSIGINTSIGSEGVSIGTERM defines signal types (macro constant) [edit]

## Return value
0 upon success, non-zero value on failure.

## Example
```cpp
#include <csignal>
#include <iostream>
 
void signal_handler(int signal)
{
    std::cout << "Received signal " << signal << '\n';
}
 
int main()
{
    // Install a signal handler
    std::signal(SIGTERM, signal_handler);
 
    std::cout << "Sending signal " << SIGTERM << '\n';
    std::raise(SIGTERM);
}
```

## See also
- [signal](/cpp/utility/program/signal/)
- [C documentation](/c/program/raise/)
