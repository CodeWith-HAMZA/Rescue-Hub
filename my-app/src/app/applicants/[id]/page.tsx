import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import StarRating from "@/components/shared/StarRatings";

export default function ApplicantDetails() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
          <div className="hidden md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl">
                Acme Prism Tee: The Cozy Chromatic Blend
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarRating rating={1} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (12 reviews)
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                60% combed ringspun cotton/40% polyester jersey tee.
              </p>
              <div className="text-4xl font-bold">$99</div>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="color">
                Color
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="black"
                id="color"
              >
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-black"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-white"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-blue"
                >
                  <RadioGroupItem id="color-blue" value="blue" />
                  Blue
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="m"
                id="size"
              >
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xs"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-s"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-m"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-l"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xl"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="quantity">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Add to cart</Button>
              <Button size="lg" variant="outline">
                <HeartIcon className="w-4 h-4 mr-2" />
                Add to wishlist
              </Button>
            </div>
          </form>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <h2 className="font-bold text-xl">Product Details</h2>
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and
              comfort for the modern individual. This tee is crafted with a
              meticulous composition of 60% combed ringspun cotton and 40%
              polyester jersey, ensuring a soft and breathable fabric that feels
              gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is
              comfortable. The shirt features a unique prism-inspired pattern
              that adds a modern and eye-catching touch to your ensemble.
            </p>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Dimensions:</span>
                <span>Length: 27 inches, Width: 18 inches</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Material:</span>
                <span>60% Combed Ringspun Cotton, 40% Polyester</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Care Instructions:</span>
                <span>Machine wash cold, tumble dry low</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 items-start order-1">
          <div className="flex md:hidden items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl">
                Acme Prism Tee: The Cozy Chromatic Blend
              </h1>
              <div>
                <p> % combed ringspun cotton/40% polyester jersey tee.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarRating rating={2} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (12 reviews)
                </span>
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto">$99</div>
          </div>
          <div className="grid gap-4">
            <img
              alt="Product Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
            <div className="hidden md:flex gap-4 items-start">
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 4</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Preview thumbnail"
                  className="aspect-square object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-6 max-w-2xl grid gap-12">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start">
              <div className="grid gap-0.5 text-sm">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  2 days ago
                </time>
              </div>
              <div className="flex items-center gap-0.5 ml-auto">
                <StarRating rating={3} />
              </div>
            </div>
            <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
              <p>
                I've been experimenting with my LuminaCook Multi-Function Air
                Fryer for a few weeks now, and it's been a versatile addition to
                my kitchen. It's great for making crispy fries, chicken wings,
                and even some healthier options.
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start">
              <div className="grid gap-0.5 text-sm">
                <h3 className="font-semibold">Alex Smith</h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  3 weeks ago
                </time>
              </div>
              <div className="flex items-center gap-0.5 ml-auto">
                <StarRating rating={2} />
              </div>
            </div>
            <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
              <p>
                I recently purchased the SparkleShine Home Cleaning Robot, and
                it has been a game-changer in my life. I used to spend hours
                every weekend cleaning my house, but now I can simply turn on
                this little robot and let it do the work. It's incredibly
                efficient, navigating around obstacles with ease. The only
                reason I didn't give it a perfect 5-star rating is that it
                occasionally gets stuck under low furniture. Overall, it's been
                a great addition to my home, saving me time and effort.
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start" />
          </div>
        </div>
      </div>
    </>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
