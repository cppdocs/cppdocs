---
title: "Thread storage duration"
source_path: "c/language/thread_storage_duration"
category: "c"
---

An object whose identifier is declared with the storage-class specifier _Thread_local (since C11) has thread storage duration. Its lifetime is the entire execution of the thread for which it is created, and its stored value is initialized when the thread is started. There is a distinct object per thread, and use of the declared name in an expression refers to the object associated with the thread evaluating the expression. The result of attempting to indirectly access an object with thread storage duration from a thread other than the one with which the object is associated is implementation-defined.

## Example
```cpp
const double PI = 3.14159;         /* const variable is global to all threads  */
_Thread_local unsigned int seed;   /* seed is a thread-specific variable       */
 
int main(void)
{
    return 0;
}
```
