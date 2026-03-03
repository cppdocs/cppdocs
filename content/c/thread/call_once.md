---
title: "call_once, once_flag, ONCE_FLAG_INIT"
source_path: "c/thread/call_once"
header: "<threads.h>"
category: "c"
---

1) Calls function func exactly once, even if invoked from several threads. The completion of the function func synchronizes with all previous or subsequent calls to call_once with the same flag variable.

## Declarations
```cpp
void call_once( once_flag* flag, void (*func)(void) );
```
_(since C11)_

```cpp
typedef /* unspecified */ once_flag
```
_(since C11)_

```cpp
#define ONCE_FLAG_INIT /* unspecified */
```
_(since C11)_

## Parameters
- `flag`: pointer to an object of type call_once that is used to ensure func is called only once
- `func`: the function to execute only once

## Return value
(none)

## Notes
The POSIX equivalent of this function is [pthread_once](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_once.html).

## Example
```cpp
#include <stdio.h>
#include <threads.h>
 
void do_once(void) {
    puts("called once");
}
 
static once_flag flag = ONCE_FLAG_INIT;
int func(void* data)
{
    call_once(&flag, do_once);
}
 
int main(void)
{
    thrd_t t1, t2, t3, t4;
    thrd_create(&t1, func, NULL);
    thrd_create(&t2, func, NULL);
    thrd_create(&t3, func, NULL);
    thrd_create(&t4, func, NULL);
 
    thrd_join(t1, NULL);
    thrd_join(t2, NULL);
    thrd_join(t3, NULL);
    thrd_join(t4, NULL);
}
```

## See also
- [C++ documentation](/cpp/thread/call_once/)
