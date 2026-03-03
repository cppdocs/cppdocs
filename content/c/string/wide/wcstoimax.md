---
title: "wcstoimax, wcstoumax"
source_path: "c/string/wide/wcstoimax"
header: "<inttypes.h>"
category: "c"
---

Interprets an unsigned integer value in a wide string pointed to by nptr.

## Declarations
```cpp
intmax_t wcstoimax( const wchar_t *restrict nptr,
wchar_t **restrict endptr, int base );
```
_(since C99)_

```cpp
uintmax_t wcstoumax( const wchar_t *restrict nptr,
wchar_t **restrict endptr, int base );
```
_(since C99)_

## Parameters
- `nptr`: pointer to the null-terminated wide string to be interpreted
- `endptr`: pointer to a pointer to a wide character.
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [INTMAX_MAX](/c/types/integer/), [INTMAX_MIN](/c/types/integer/), [UINTMAX_MAX](/c/types/integer/), or 0 is returned, as appropriate. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <errno.h>
#include <inttypes.h>
#include <stdio.h>
#include <string.h>
#include <wchar.h>
 
int main(void)
{
  wchar_t* endptr;
 
  wprintf(L"%ld\n", wcstoimax(L" -123junk", &endptr, 10)); /* base 10                    */
  wprintf(L"%ld\n", wcstoimax(L"11111111", &endptr, 2));   /* base 2                     */
  wprintf(L"%ld\n", wcstoimax(L"XyZ", &endptr, 36));       /* base 36                    */
  wprintf(L"%ld\n", wcstoimax(L"010", &endptr, 0));        /* octal auto-detection       */
  wprintf(L"%ld\n", wcstoimax(L"10", &endptr, 0));         /* decimal auto-detection     */
  wprintf(L"%ld\n", wcstoimax(L"0x10", &endptr, 0));       /* hexadecimal auto-detection */
 
  /* range error             */
  /* LONG_MAX+1 --> LONG_MAX */
  errno = 0;
  wprintf(L"%ld\n", wcstoimax(L"9223372036854775808", &endptr, 10));
  wprintf(L"%s\n", strerror(errno));
}
```

## See also
- [strtoimaxstrtoumax](/c/string/byte/strtoimax/)
- [intmax_t](/c/types/integer/)
- [uintmax_t](/c/types/integer/)
- [wcstolwcstoll](/c/string/wide/wcstol/)
- [wcstoulwcstoull](/c/string/wide/wcstoul/)
- [C++ documentation](/cpp/string/wide/wcstoimax/)
