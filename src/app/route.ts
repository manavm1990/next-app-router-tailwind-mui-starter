// https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: Request): Promise<void> {
  console.log(request);
}

export async function HEAD(request: Request): Promise<void> {
  console.log(request);
}

export async function POST(request: Request): Promise<void> {
  console.log(request);
}

export async function PUT(request: Request): Promise<void> {
  console.log(request);
}

export async function DELETE(request: Request): Promise<void> {
  console.log(request);
}

export async function PATCH(request: Request): Promise<void> {
  console.log(request);
}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request): Promise<void> {
  console.log(request);
}
