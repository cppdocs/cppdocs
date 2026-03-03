---
title: "fflush"
source_path: "c/io/fflush"
header: "<stdio.h>"
category: "c"
---

For output streams (and for update streams on which the last operation was output), writes any unwritten data from the stream's buffer to the associated output device.

## Declarations
```cpp
int fflush( FILE* stream );
```

## Parameters
- `stream`: the file stream to write out

## Return value
Returns zero on success. Otherwise [EOF](/c/io/) is returned and the error indicator of the file stream is set.

## Notes
POSIX [extends the specification of fflush](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fflush.html) by defining its effects on an input stream, as long as that stream represents a file or another seekable device: in that case the POSIX file pointer is repositioned to match the C stream pointer (which effectively undoes any read buffering) and the effects of any [ungetc](/c/io/ungetc/) or [ungetwc](/c/io/ungetwc/) that weren't yet read back from the stream are discarded.

Microsoft also extends the specification of fflush by defining its effects on an input stream: in Visual Studio 2013 and prior, it [discarded the input buffer](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2013/9yky46tz(v=vs.120)), in Visual Studio 2015 and newer, it [has no effect, buffers are retained](https://msdn.microsoft.com/en-us/library/9yky46tz.aspx).

## See also
- [fopenfopen_s](/c/io/fopen/)
- [fclose](/c/io/fclose/)
- [C++ documentation](/cpp/io/c/fflush/)
